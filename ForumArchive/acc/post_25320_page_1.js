[{"Owner":"ian","Date":"2016-09-20T20:15:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow can we use cannon_t_s native API with babylon?._lt_br /_gt__lt_br /_gt_\n\tAre/Is there any example(s)?_lt_br /_gt_\n\tHow cen we set up sphere and plane/box? (any simple example?)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMust we always set physics Impostor/Collider on mesh which has checkCollisions _eq_ true ?_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-21T01:29:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Ian.  CheckCollisions property is not used with physics engines (afaik).  That is for BJS built-in collision system_co_ not 3rd party physics engines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ native api..._lt_br /_gt_\n\tGo here...  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ND6TH%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ND6TH#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at lines 124-129... nativeParams_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is one way set native parameters during construction of physics things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow for another way... for after-construction fun...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 100... it logs wheelBody object to console.  Open your browser f12 dev tools_co_ and click on that _lt_em_gt_object _lt_/em_gt_in the console_lt_em_gt_._lt_/em_gt_  View it in object inspector.  Notice that it is the same object as...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you may work-with a Cannon Body Class... by working with wheelBody.  Makes sense_co_ right?  WheelBody _eq__eq_  CannonBody.  Many properties and methods on wheelBody... all native to Cannon.  You can call/set them all... from within scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/PhysicsEngine_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/PhysicsEngine_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is a way to interface with the physics engine_co_ too.  There is no scene.currentPhysicsEngineObject_co_ becasue physics engines do not use that method of _qt_integrating_qt_ with BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis should help.  Experiment_co_ experiment_co_ experiment.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-09-21T09:21:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Wingnut! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ A perfect answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust wanted to add - each and every impostor has a public variable called physicsBody _co_ which is the physics engine body. Every joint has physicsJoint (I will let you guess what this is)_co_ and the physics engine class itself has the world (of the physics engine) as a public variable as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have all tools to use the native functions of the physics engine_co_ just don_t_t forget that Babylon is always taking care of the basics for you - position and rotation update every frame. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-09-21T10:10:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll try to play around. But still don_t_n know (have a time to explore). Can anybody just post any simple code snippet how to set ground and ball (physics with cannon.js native classes/objects/constructors/methods..._lt_br /_gt__lt_br /_gt_\n\tgreetings\n_lt_/p_gt_\n\n_lt_p_gt_\n\tian\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]