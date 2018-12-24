[{"Owner":"Babylonian","Date":"2016-12-11T20:11:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_I_t_m working on a project where a large number of objects get created_co_ then are destroyed (with .dispose())_co_ on an ongoing basis. Using latest code from the _lt_a href_eq__qt_http_dd_//babylonjs.com/versionBuilder_qt_ rel_eq__qt_external nofollow_qt__gt_version builder_lt_/a_gt_ having learned my lesson _dd_-)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see the number of materials (in scene.materials) gradually get larger and larger. And the browser using more and more memory.... So it looks like the materials are not being dispose()_t_ed of when the mesh that uses them is disposed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_I_t_m using the construct from the examples_co_ i.e._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var mesh _eq_ new BABYLON.Mesh.CreateXXX(...)\nmesh.material _eq_ new BABYLON.StandardMaterial(...)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ It does NOT always seem to help to explicitly dispose of the material before the mesh_co_ e.g.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.material.dispose()_sm_\nmesh.dispose()_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t..and it has some side-effects if a material is used by another mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut should that be necessary?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ can it help to store a single material that can be used by a number of meshes? Or does the material data get duplicated when assigned to a mesh in any case?_lt_br /_gt_\n\tCheers...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-12-11T20_dd_21_dd_39Z_t_ title_eq__t_12/11/2016 08_dd_21  PM_t_ data-short_eq__t_2 yr_t__gt_December 11_co_ 2016_lt_/time_gt_ by Babylonian_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_did some more testing...\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2016-12-12T05:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ materials and meshes are different assets with different lifecycles_co_ and disposing one does not automatically dispose the other. Babylon will not duplicate resources if you reuse one material for lots of meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs such_co_ code like your sample code is only necessary if all your meshes need their own unique materials. Otherwise_co_ it_t_s better to create only the materials you need and keep them_co_ even as meshes get dynamically created and disposed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-12T09:31:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdding to the wonderful answer before me - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you dispose a material_co_ and there are _qt_side effects_qt_ it means you shouldn_t_t dispose it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. It is being used somewhere else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPay attention_co_ that just like mesh-material disposing (mesh.dispose() doesn_t_t automatically dispose the material)_co_ textures are not disposed when you dispose the material. You have to manually follow this_co_ or force texture dispose_co_ which might result in the same side effects you are experiencing when disposing materials (or worse). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA quick rule of thumb - reuse as much as possible_co_ but try to do it at the lowest level. If you have 5 meshes_co_ and they all use the same diffuse texture_co_ but each has a different bump textures_co_ these are_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5 meshes that can be disposed individually_co_ 5 materials that can be disposed individually_co_ 5 bump textures that should be disposed when not used_co_ 1(!) diffuse texture that should only disposed when not used.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother thing to notice - when creating a texture from the same URL_co_ Babylon will reuse the WebGL texture buffer so the GPU is using the same memory. The texture object itself is NOT the same. so_co_ calling 5 times new Texture(_qt_sameUrl.jpg_qt_...) will create 5 objects_co_ all pointing at the same WebGL buffer. If you dispose one of them_co_ the GPU RAM will be cleared_co_ but the other 4 will still reference it. Babylon will try doing its best to prevent you from doing that (it counts the number of uses of each buffer)_co_ but if you try really hard_co_ you will break it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Babylonian","Date":"2016-12-12T21:20:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks both - this makes sense!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]