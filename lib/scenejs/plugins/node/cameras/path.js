/**
 * Camera which can fly along a curve that we can continually add to
 *
 * Usage example
 * -------------
 *
 * someNode.addNode({
 *      type: "cameras/path",
 *      path: [
 *          10,     20.3,   30,
 *          -20.0,  12.3,   -20,
 *          -23,    3.3,    -12
 *      ],
 *      showPath: true
 * },
 *      function(camera) {
 *
 *          camera.stop();
 *
 *          camera.continue();
 *
 *          camera.restart();
 *
 *          camera.addPath([
 *               4,    4.3,   20,
 *              -3.0,  1.3,  -10,
 *              -23,   3.3,  -12
 *          ]);
 *      });
 *
 *
 *
 *
 * The camera is initially positioned at the given 'eye' and 'look', then the distance of 'eye' is zoomed out
 * away from 'look' by the amount given in 'zoom', and then 'eye' is rotated by 'yaw' and 'pitch'.
 *
 */
require([
    SceneJS.getConfigs("pluginPath") + "/lib/gl-matrix-min.js"
],
    function (glmat, jquery) {

        // Define the node type

        SceneJS.Types.addType("cameras/path", {

            construct:function (params) {

                var flying = false;
                var path = [];

                var lookat = this.addNode({
                    type:"lookAt",
                    nodes:[
                        {
                            type:"name",
                            name:"noname",

                            // A plugin node type is responsible for attaching specified
                            // child nodes within itself
                            nodes:params.nodes
                        }
                    ]
                });

                scene.on("tick",
                    function () {

                        if (flying) {

                        }
                    });
            },

            /** Replaces the camera path
             * @param path
             */
            setPath:function (newPath) {
            },

            /** Appends to the camera path
             * @param path
             */
            addPath:function (newPath) {
            },

            /** Clears the camera path
             */
            clearPath:function () {
            },

            /** Restarts the camera at the beginning of the camera path
             */
            restart:function () {
            },

            /** Shows or hides the path
             * @param show
             */
            showPath:function (show) {
            },

            /** Node destructor
             */
            destruct:function () {
            }
        });


    });