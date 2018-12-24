[{"Owner":"MackeyK24","Date":"2017-08-30T06:56:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWTF... With blend trees _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI thought blend trees was this big _t_mystical animation system_t_ that magically _t_BLENDED_t_ animations...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst off... the phrase _t_BLEND TREE_t_ does NOT HAVE ANYTHING (except for maybe this directBlendParameter unity uses... gotta look more into that one) to do with the actual usage or terminology that we use in Babylonjs for _qt_Animation Blending_qt_ kind of a way to smoothly _qt_BLEND_qt_ from playing one animation into another animation WITHOUT being so _t_JERKY_t_ ... I THINK _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNow from all the metadata I am gathering from unity to build my blend tree system in the toolkit_co_ there is NOTHING or NO VALUES (again except for may the directBlendParamter) that would seem to directly influence what we would call_dd_ animation.blendingSpeed (Transitions are another thing... I think the transition duration is supposed to somehow use animation.blendingSpeed... but that another story)... actually Blend trees are EASIER to implement than transition...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBLEND TREES are simply a _qt_Parent animation controller_t_ type deal where it has a set on child trees (that actually have a reference to the clip) that it can play at any given movement based off of PosX and PosY values being pumped into it so if posX and posY (using thresholds) are 0 and 0 you might set that to a idle animation_co_ if its 0 and 0.5 set to walk and 0 and 1 set to run (a little more complex in the condition checking of course... but basically that)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo they use the the term _qt_BLEND_qt_ to actually swap out the current playing animation from a group of child animations based on a bunch of POS-X and POS-Y inputs...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI always thought it was some super complex  animation system... From what I can tell its not... and if there is any additional _qt_Animation Blending_qt_ type stuff that needs to happen to make it fully (or as much as our BabylonJS API) support any kind of actual animation.blendingSpeed usage and even all the other custom animation support you get from babylon itself to make it a real BLEND TREE system in babylon js...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell that what I working on at least _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOR I COULD BE TOTALLY WRONG... DUNNO... IM BAKED RIGHT NOW _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-30T15:56:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure if you were writing about _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Animations/babylon.easing.ts_qt_ rel_eq__qt_external nofollow_qt__gt_easings_lt_/a_gt_.  I do not really know how to use the BJS animation system_co_ but this is how different animations are blended there.  I also stole easings for my animation system_co_ where everything is an interpolation.  These end up pacing the interpolation.  Work great. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou may wish to look at _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/animations#easing-functions_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_.  There were other hits on Documentation search as well._lt_span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-30T18:07:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ how it going... For right now I am just trying to create the framework for a mini animation state machine... To handle transitions and blend trees from unity... still working out actual state... which state it a clip and which state it a blend tree with several child clips that get played based on PosX and PosY input... the actual BLENDING or EASING OR WHATEVER we call the process of actually _t_changing_t_ from the current animation to the new animation... Well I not too sure about that and I guess I tackle that part when I gt the rest of the framework in place... But we should be able to DO SOMETHING in BabylonJS to _t_COMPLETE_t_ that BLEND TREE feature... I would think.. I sure hope so... looking good so far though _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]