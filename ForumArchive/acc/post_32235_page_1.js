[{"Owner":"IIerpos","Date":"2017-08-08T15:59:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe arguments in the attachControl() method for ArcRotateCamera do not seem to behave as described in the documentation. I am unable to achieve what I could before 3.0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPrevent default seems to be affected by whether _qt_useCtrlForPanning_qt_ is true. I can_t_t get the RMB to pan at all_co_ as I could the previous version._lt_br /_gt_\n\tplease toy with the booleans and see what I mean.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#6QH6SN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#6QH6SN_lt_/a_gt__lt_br /_gt_\n\t _lt_br /_gt_\n\tIdeally_co_ I would have the RMB and ctrl+LMB both panning_co_ with no menu showing up on RMB click.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the very least_co_ I would like to be able to disable the right click menu while having panning enabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-08T16:57:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWorks as expected_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#6QH6SN%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#6QH6SN#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoc_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.0/arcrotatecamera#attachcontrol-element-nopreventdefault-usectrlforpanning-panningmousebutton-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/3.0/arcrotatecamera#attachcontrol-element-nopreventdefault-usectrlforpanning-panningmousebutton-rarr-void_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCode which could be clearer_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L284_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L284_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"IIerpos","Date":"2017-08-09T14:36:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK. Sorry about that. The looking at the code did clear that up_co_ mostly. For readers_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. The noPreventDefault option in ArcRotateCamera.attachControl() does not stop a right click menu if the ctrl-LMB panning is enabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. (I should have seen this) The panningMouseButton option is a NUMBER - the number of the button that you want to pan with. 0 - LMB_co_ 1 - MMB_co_ 2 - RMB._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_That being said_co_ I have a strange bug in my implementation of BABYLON where everything loads_co_ unless I attach the camera controls. When I do_co_ it throws an error_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_TypeError_dd_ element.addEventListener is not a function     babylon.custom.js_dd_33275_dd_13_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn another implementation of mine_co_ the page loads_co_ and the controls attach_co_ but the panning will not work. In both cases the camera is an arcRotateCamera and line that causes or has issues is simply\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.activeCamera.attachControl(canvas_co_ false_co_ false)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have any ideas_co_ I_t_d be most grateful. Here is a file where_co_ for me_co_ the panning will not work. Drop the two files in a folder with a copy of babylon.custom.js and it should demonstrate the issue.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14356_qt__gt_tmmWeb3D.js.htm_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14355_qt__gt_a.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-09T18:31:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you reproduce your issue in the Playground?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"IIerpos","Date":"2017-08-16T12:48:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s taken me ages to really get back to this_co_ but my problem has not gone away. Unfortunately_co_ I can_t_t reproduce this without loading a .babylon file exported from Blender. Please open the given test file. If I build the scene manually using a createScene()_co_ the panning works just fine_co_ whereas if I use loadFile()_co_ it is broken. In both cases_co_ the controls are attached by the same code_co_ so I surmise that the problem is in the my loader or the .babylon file.\n_lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14460_qt__gt_panningProblemDemo.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-16T17:22:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I know where the issue is _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tthe initial camera is replaced by the one loaded in the .babylon file\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust change your show function to this one_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        function show() {\n\n\n            var camera _eq_ new BABYLON.ArcRotateCamera(_t_camera1_t__co_ 0_co_ 0_co_ 0_co_ null_co_ scene)_sm_\n            camera.setPosition(new BABYLON.Vector3(0_co_ 0_co_ -10))_sm_\n            camera.setTarget(BABYLON.Vector3.Zero())_sm_\n            camera.panningSensibility _eq_ 300_sm_\n\n            scene.activeCamera _eq_ camera_sm_\n            scene.activeCamera.attachControl(canvas_co_ false_co_ true)_sm_\n\n            engine.runRenderLoop(function() {\n                scene.render()_sm_\n            })_sm_\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"IIerpos","Date":"2017-08-16T18:02:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am sorry - I was very unclear about the lines at the end of the script (86_co_ 87). They were meant to be run one or the other as a comparison between createScene() vs. loadFile(). Both contain entire scenes which include cameras. When I load a .babylon scene file_co_ can I not successfully attach the controls of the camera which is contained in the file to the canvas? In the setup as I intended it to run_co_ there should not be a camera to replace. The one loaded in the .babylon file should be the only existing camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if I replace the camera which is in the scene already with a new BABYLON.ArcRotateCamera(...)_co_ I may get the results I want_co_ but I still don_t_t understand what is going wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_ by the way!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-16T21:32:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThen you just have to setup your camera with the same panningSensibility (and make sure it is an ArcRotateCamera)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]