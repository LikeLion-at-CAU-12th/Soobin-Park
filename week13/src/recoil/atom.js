import { atom } from "recoil";

export const userNameAtom = atom({
    key: "userName",
    default: "suzzang",
});

export const emailAtom = atom({
    key: "email",
    default: "suzzang@cau.ac.kr",
});

export const isSubmittedAtom = atom({
    key: "isSubmitted",
    default: false,
});

//suzzang
export const themeAtom = atom({
    key: "theme",
    default: ``,
});