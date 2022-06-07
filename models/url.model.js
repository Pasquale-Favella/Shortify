'use strict'

const {Schema , model} = require('mongoose');
const { nanoid } = require('nanoid');
const mongooseFuzzySearching = require('mongoose-fuzzy-searching');
const { getLinkPreview } = require('link-preview-js');
const { toDataURL } =require('qrcode');

const EXPIRES_POLICY = 3600 * 24 * 2 ;//2 DAYS

const urlSchema = new Schema({
    site: {
        type: String,
        required: true,
        match: [/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/, 'URL invalid']
    },
    slug : {
        type: String,
        index: true
    },
    createdAt: { type: Date, expires: EXPIRES_POLICY , default: Date.now },
    preview : {
        title : String,
        img : String
    },
    qr : String,
    redirectUrl : String,
    sessionId : {
        type: String,
        index: true
    }
});

urlSchema.plugin(mongooseFuzzySearching, { fields: ['site'] });

urlSchema.pre('save', async function(next) {
    
    this.slug = nanoid(10);

    this.redirectUrl = `${process.env.HOSTURL || ''}/url/${this.slug}`;

    const [preview , qr] = await Promise.all([getPreview(this.site),generateQR(this.site)]);

    this.preview = preview;

    this.qr = qr;

    next();
});

const getPreview = url => getLinkPreview(url,{
    imagesPropertyType: "og",
    headers: {
      "user-agent": "googlebot" ,
      "Accept-Language": "en-EN", 
    },
    timeout: 2000
}).then(preview => ({
      title : preview.title,
      img : preview.images && preview.images.lenght > 0
            ? preview.images[0]
            : preview.favicons[0]
}))
.catch(()=>({}));

const generateQR = slug => toDataURL(slug).catch((err)=>console.error(err));

module.exports = model('urls',urlSchema);