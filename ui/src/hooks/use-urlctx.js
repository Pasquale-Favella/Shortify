import { useContext } from "react";
import { UrlContext } from "../context/UrlContext";

export const useUrlCtx = ()=> useContext(UrlContext);