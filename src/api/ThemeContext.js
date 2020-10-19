import React from "react";

export const Theme = {
    light:{
        theme:{
            color:"#1089ff"
        },
        root:{
            backgroundColor:"#eeeeee",
            color:"#23374d"
        },
        navbar:{
            backgroundColor: "#23374d",
            color: "#eeeeee"
        },
        button:{
          color:"#eeeeee"
        }
    },
    dark:{

    }
};

/*
* #1089ff
* #e5e5e5
* */
export const ThemeContext = React.createContext(Theme.light);