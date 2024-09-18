self.__uv$config = {
    prefix: "/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/backendsystem/uv.handler.js",
    client: "/backendsystem/uv.client.js",
    bundle: "/backendsystem/uv.bundle.js",
    config: "/backendsystem/uv.config.js",
    sw: "/backendsystem/uv.sw.js",
  };