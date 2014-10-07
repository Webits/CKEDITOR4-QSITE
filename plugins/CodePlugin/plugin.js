CKEDITOR.plugins.add('CodePlugin',
{
    init: function (editor) {
        // Add the link and unlink buttons.
        editor.addCommand('Library', 
		{
			exec : function( editor )				
				{  
				  //alert();
					window.open('../cmx/library/mf.asp?t='+editor.name+'','lb','width=680, height=500');
					//editor.insertHtml( 'The current date and time is: ' );
				}
		});

        editor.addCommand('filebase', 
		{
			exec : function( editor )				
				{    
					window.open('../cmx/filebase/mf.asp?t='+editor.name+'','lb','width=680, height=500');
					//editor.insertHtml( 'The current date and time is: ' );
				}
		});

        editor.addCommand('sorce', 
		{
			exec : function( editor )				
				{    
					window.open('../cmx/source/mf.asp?t='+editor.name+'','lb','width=680, height=500');
					//editor.insertHtml( 'The current date and time is: ' );
				}
		});

		editor.addCommand('templat', 
		{
			exec : function( editor )				
				{    
					window.open('../cmx/templat/mf.asp?t='+editor.name+'','lb','width=680, height=500');
					//editor.insertHtml( 'The current date and time is: ' );
				}
		});

		editor.ui.addButton( 'Library',
		{
			label: '上傳圖片',
			command: 'Library',
			icon:  'images/icon/library.png',
			id: '9999'
		} );

		editor.ui.addButton( 'filebase',
		{
			label: '上傳檔案',
			command: 'filebase',
			icon:  'images/icon/filebase.png'
		} );

		editor.ui.addButton( 'sorce',
		{
			label: '共用圖庫',
			command: 'sorce',
			icon:  'images/icon/sorce.png'
		} );


				editor.ui.addButton( 'templat',
		{
			label: '樣版檔',
			command: 'templat',
			icon:  'images/icon/templat.png'
		} );


    }
});