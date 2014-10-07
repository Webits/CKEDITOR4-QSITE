/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
		 config.language = 'zh';
	 config.uiColor = '#333333';
	 config.height = 400;
	 config.width = 760;

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'colors' },
		{ name: 'others' },
		{ name: 'paragraph', groups: [ 'align' ]},
		{ name: 'document',	   groups: [ 'mode' ] },
		{ name: 'styles' },		
	];

	config.font_names =    '微軟正黑體/微軟正黑體,  sans-serif;'+'新細明體/新細明體, Times New Roman, serif;' + 'Arial/Arial, Helvetica, sans-serif;' +'Tahoma/Tahoma, Geneva, sans-serif;' +
	'Times New Roman/Times New Roman, Times, serif;' +	'Verdana/Verdana, Geneva, sans-serif';

	config.fontSize_sizes = '10/10px;11/11px;12/12px;13/13px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;'


	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Flash,Undo,Redo,Print,styles,Format,Iframe';

    config.extraPlugins = 'CodePlugin,justify,colorbutton,youtube';

	
	// Se the most common block elements.
	//config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	//config.removeDialogTabs = 'image:advanced;link:advanced';
};
