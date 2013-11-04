Intro
-----

Simple test scene using SceneJS 3.1 that loads a modified shell JSON file.

Within index.html:

1. Includes SceneJS 3.1 and plugins, plus jQuery
2. Defines a canvas with ID "scenejsCanvas"
3. Loads a shell JSON 'shell2.json',
2. Builds SceneJS scene from that
3. Loads model JSON 'testObject.json'
4. Finds node in scene having ID "sun-light"
5. Creates child node of that, using the model JSON

Note:

I tweaked the JSON for (1) to make it SceneJS 3.1 compatible (see next section).

The output from JsonGeometrySerializer is of course not SceneJS format, so for (3) I'm
 just loading a snippet of SceneJS JSON that defines a teapot. I assume you'll be parsing
 the JsonGeometrySerializer in some way to convert it for SceneJS.

Shell File changes
------------------

I took the example shell from:
https://raw.github.com/opensourceBIM/BIMserver/dev/Documentation/files/Test%202%20Shell.json

and saved that to:
data/shells/shell2.json

Then I made the following changes to that file:

1. Removed "loggingElementId" from the "scene" node - that's no longer supported

2. Removed the "clearColor" property from the "renderer" node.

3. Changed the "light" node to this:

``` javascript
{
    "type":"lights",
    "id":"sun-light",
    "lights":[
        {
            "mode":"ambient",
            "color":{ "r":0.2, "g":0.2, "b":0.2 }
        },
        {
            "mode":"dir",
            "color":{
                "r":0.8,
                "g":0.8,
                "b":0.8
            },

            "dir":{
                "x":-0.5,
                "y":-0.5,
                "z":-1.0
            },
            "diffuse":true,
            "specular":true
        }
    ],
    nodes: [
        // Rest of scene should be child nodes
        // of the "lights" node
    ]
}
```

