[{"Owner":"paperElectron","Date":"2014-09-04T18:23:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey all_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m looking for some direction on snapping objects into position against other objects edges. I_t_m also looking to define a snap point on an object and use that to lock it into another objects corresponding point._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The first problem is essentially voxel drawing with irregular sized objects (all prisms)_co_ I need to be able to click on a face and have the new object placed in relation to the face that I clicked. So if  I cast a ray and it finds the top face of an object_co_ the new objects bottom face should align with it. (and snap to whichever side edge the mouse was closer to?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I imagine the second problem as having a little sphere attached to the objects mesh in an arbitrary location_co_ and using that spheres center point to snap into the nearest objects corresponding anchor point. Like defining a hook on an object and using it to snap onto a clothesline. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Babylon.js API is pretty huge and I_t_m not at all familiar with it_co_ but I have a reasonable grasp of the concepts involved. Any direction or suggestions on how to make a system as I described work would be greatly appreciated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-09-04T18:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_wild guess_co_ but I am assuming that once these 2 objects are _t_snapped together_t__co_ that the behaviour you wish to see is they now move as one?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If so_co_ after they are positioned in the correct relation to one another (world space)_co_ you could parent one to the other.  After that only move / rotate / scale  the parent and the relationship will take care of the child.  If you wish move the child after that_co_ it gets tricky._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paperElectron","Date":"2014-09-04T18:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_53337_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_8999_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt_ data-cite_eq__qt_JCPalmer_qt_ data-ipsquote-timestamp_eq__qt_1409856259_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_wild guess_co_ but I am assuming that once these 2 objects are _t_snapped together_t__co_ that the behaviour you wish to see is they now move as one?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_No_co_ not immediately anyway_co_ Once they are positioned they are pretty much going to be static. If I wanted to move them as a group I guess they would have to be put into a group_co_ moved_co_ then removed from the group. But I_t_m not really concerned with the after yet_co_ as I still haven_t_t fully conceptualized the _qt_before_qt_ yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-10T12:08:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi paperElectron!  Have you ever heard of a _qt__lt_strong_gt__lt_a href_eq__qt_http_dd_//en.wikipedia.org/wiki/Voronoi_diagram_qt_ rel_eq__qt_external nofollow_qt__gt_Voronoi Diagram_lt_/a_gt__lt_/strong_gt__qt_?  I have heard rumors that some of the very best _qt_snap tech_qt_... uses such things_co_ or related formulas.  I would love to tell you that Babylon.js team has a library of snap-related methods and classes... but that_t_s not the case. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This subject is somewhat related to the _qt_slide-along_qt_ subject that was momentarily raised in the _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/8433-smooth-camera-follow/_qt__gt_Smooth Camera Follow_lt_/a_gt_ thread.  These types of things are not really framework-layer things_co_ but instead_co_ scene-assembly tools._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But PE_co_ I can almost sure-promise... that if you get some good snap algorithms_co_ code_co_ demos_co_ tests_co_ etc... then Babylon.js admin would LOVE to include some/all of it... in the Babylon.js tools department (with your permission).  Snap is important for almost all of us... but especially for those who are building editors and scene layout applications._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One suggestion... is Blender.  Find its _t_align_t_ code and steal the crap out of it_co_ if applicable.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Also_co_ find the authors of great 3D snaps that you see in video games and other applications_co_ and just camp on the author_t_s lawn until they agree to donate their time to help with webGL snap tech.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And most importantly_co_ tell us of your adventures... right here... on the forum.  Meantime_co_ c_t_mon snappers... let_t_s hear from you guys.  My comment here is just noise.  Anyone got more info on snapping?  Cough it up!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]