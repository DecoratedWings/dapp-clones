import { configureAxe } from "jest-axe";

export const axe = configureAxe({
  globalOptions: {
    checks: [
      {
        id: "img-alt-redundant",
        evaluate(node: { getAttribute: (arg0: string) => any; }) {
          const altAttribute = node.getAttribute("alt");
          if (!altAttribute) return true;
          return !altAttribute.match(/(photo|image|logo)/i);
        },    
      },
    ],

    rules: [
      {
        id: "img-alt-redundant",
        enabled: true,
        selector: "img", 
        any: ["img-alt-redundant"],
      },
    ],
  },
});