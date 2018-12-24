[{"Owner":"arek3D","Date":"2018-08-03T12:13:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!_lt_br /_gt_\n\t_lt_br /_gt_\n\tI have created a custom mesh like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_new BABYLON.Mesh(_qt_custom_qt__co_ this.scene)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd after added simplify() method_co_ nothing has been changed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have created a playground for testing this issue. As you can see_co_ the same settings in simplify() method change the structure of sphere_co_ but do not change my custom mesh_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JT9SFV%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#JT9SFV#4_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_span_gt_ _lt_/span_gt_Is it a bug_co_ or it is impossible to add simplify() method to custom mesh?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-03T15:21:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tit should work but your mesh is really simple already and furthermore there is no common vertex (all faces have independant vertex) which is not ideal for the simplifier\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-08-03T15:32:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am working with meshes where are huge amount of faces. This is only an example but the behaviour is the same._lt_br /_gt_\n\tI think the second part of your answer is the reason._lt_br /_gt_\n\tSo here is the next question - how to weld these vertexes to have one object instead of bunch of faces?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-03T15:36:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell_co_ you would have to go through the vertices and find the ones that share the same positions and normals (and then update the indices to point to only one of them)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-03T16:03:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSee if this helps _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/snippets/minimise_vertices_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/snippets/minimise_vertices_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]