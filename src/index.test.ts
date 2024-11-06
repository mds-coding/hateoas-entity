import { HateoasEntity } from "./index.js";

test("`HateoasEntity` can be created", () => {
  const entity = new HateoasEntity("object", { hello: "world" });
  expect(entity).toBeDefined();
  expect(entity.type).toBe("object");
  expect(entity.data).toStrictEqual({ hello: "world" });
});
