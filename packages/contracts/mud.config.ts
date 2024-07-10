import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "demo",
  tables: {
    Position: {
      schema: {
        entity: "address",
        x: "int32",
        y: "int32",
      },
      key: ["entity"],
    },
  },
});
