[{"Owner":"Aidoru","Date":"2018-07-30T12:49:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co__lt_br /_gt_\n\tI have a problem to use CSG on imported meshes_co_ here_t_s my code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    var a_sm_\n    var b_sm_\n\n    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model1.stl_qt__co_ scene_co_ function (newMeshes) {\n        // Set the target of the camera to the first imported mesh\n        camera.target _eq_ newMeshes[0]_sm_\n        a _eq_ newMeshes[0]_sm_\n    })_sm_\n\n\n\n    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model2.stl_qt__co_ scene_co_ function (newMeshes) {\n        // Set the target of the camera to the first imported mesh\n        //camera.target _eq_ newMeshes[0]_sm_\n        b _eq_ newMeshes[0]_sm_\n    })_sm_\n\n\n    var aCSG _eq_ BABYLON.CSG.FromMesh(a)_sm_\n    var bCSG _eq_ BABYLON.CSG.FromMesh(b)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_qt_var a_qt_ and _qt_var b_qt_ are undefined and Debug told me that\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _qt_BABYLON.CSG_dd_ Wrong Mesh type_co_ must be BABYLON.Mesh_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any method to convert imported mesh to BABYLON.MESH?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-30T15:28:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(you were not in the right sub forum (I moved the topic already))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in your example_co_ ImportMesh is an asynchronous function which means that a and b will be set but later when the file will be read. So you have to move to something (not tested) like that_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_  var a_sm_\n    var b_sm_\n\n    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model1.stl_qt__co_ scene_co_ function (newMeshes) {\n        // Set the target of the camera to the first imported mesh\n        camera.target _eq_ newMeshes[0]_sm_\n        a _eq_ newMeshes[0]_sm_\n        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model2.stl_qt__co_ scene_co_ function (newMeshes) \n        {\n        // Set the target of the camera to the first imported mesh\n        //camera.target _eq_ newMeshes[0]_sm_\n        b _eq_ newMeshes[0]_sm_\n\n    var aCSG _eq_ BABYLON.CSG.FromMesh(a)_sm_\n    var bCSG _eq_ BABYLON.CSG.FromMesh(b)_sm_﻿\n    })_sm_\n    })_sm_\n\n\n\n\n\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-30T16:37:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like you want to load the meshes at the same time_co_ based on your comment about setting the target.  There may be a race condition - it_t_s untested_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var a_sm_\nvar b_sm_\nvar meshesLoaded _eq_ 0_sm_\n\nBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model1.stl_qt__co_ scene_co_ function (newMeshes) {\n    a _eq_ newMeshes[0]_sm_\n    meshesLoaded++_sm_\n\n    // Set the target of the camera to the first imported mesh\n    if (meshesLoaded _eq__eq__eq_ 1) {\n        camera.target _eq_ newMeshes[0]_sm_\n    } else if (meshesLoaded _eq__eq__eq_ 2) {\n        // CSG\n    }\n})_sm_\n\n\nBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./public/Models/_qt__co_ _qt_model2.stl_qt__co_ scene_co_ function (newMeshes) {\n    a _eq_ newMeshes[0]_sm_\n    meshesLoaded++_sm_\n\n    // Set the target of the camera to the first imported mesh\n    if (meshesLoaded _eq__eq__eq_ 1) {\n        camera.target _eq_ newMeshes[0]_sm_\n    } else if (meshesLoaded _eq__eq__eq_ 2) {\n        // CSG\n    }\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think a better way is with promises and it_t_s easier to make a more generic solution.  Here is a commit that loads all the materials and returns when they are all loaded.  So_co_ you could write a method that takes a list of Models and returns when they are all loaded.  Look for these lines_dd__lt_br /_gt_\n\tmtlPromises.push(new Promise((resolve_co_ reject) _eq_&gt_sm_ {...}))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand_lt_br /_gt_\n\tPromise.all(mtlPromises).then(() _eq_&gt_sm_ {...})_sm__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/82f8addaae0c84e35adf289b122d3423dd9d59c5#diff-2209ca1e0591b2fc9b58edd4295b48eb_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/82f8addaae0c84e35adf289b122d3423dd9d59c5#diff-2209ca1e0591b2fc9b58edd4295b48eb_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]