const  { registerBlockType, Editable, source } = wp.blocks;
const  { __ } = wp.i18n;

// This is the siple block to render static text.
registerBlockType(
    'basic/basic-static', {
        title: __( 'Hello World' ),
        description: __('Simple Static Block To Render The HELLO WORLD!'),
        icon: 'universal-access-alt',
        category: 'layout',
        keywords: [ __('static'), __('helloworld') ],
        useOnce: false,
        html: false,
        // save() {
        //     return <div className="statctext"> <p> HELLO WORLD! </p> </div>;
        // },
        edit() {
            return <div className="statctext"> <p> HELLO WORLD!! </p> </div>;
        }
    }
);

// This is the simple static block to render the sitename.
registerBlockType(
    'basic/sitename', {
        title: __('Site Name'),
        description: __('This blocks renders the site name of our website'),
        icon: 'universal-access-alt',
        category: 'layout',
        keyWords: [ __('websitename') ],
        useOnce: true,
        attributes: {
            content: {
                source: 'text',
                selector: 'h1',
            },
        },
        save( { attributes } ) {
            return <div className="statctext">  <h1> { attributes.content } </h1> </div>;
        },
        edit( { attributes } ) {
            attributes.content = "gutenberg.test";
            return <div className="statctext"> <h1> { attributes.content } </h1> </div>;
        }
    },
);

// This is the simple static block to render the sitename.
registerBlockType(
    'basic/inputfield', {
        title: __('Dynamic Name'),
        description: __('This blocks renders the name of what you enter.'),
        icon: 'universal-access-alt',
        category: 'layout',
        keyWords: [ __('dynamicname') ],
        useOnce: true,
        attributes: {
            content: {
                source: 'text',
                selector: 'h1',
            },
        },
        save( { attributes } ) {
            return <div className="statctext">  <h1> { attributes.content } </h1> </div>;
        },
        edit( { attributes, setAttributes, isSelected } ) {
            function onChange( event ) {
                setAttributes( { content: event.target.value } );
            }
            if( isSelected ){
                alert("OHH It's Selected!!!");
            }
            return <input value={attributes.content} onChange={onChange} placeholder="Enther the .... " />
        }
    },
);

registerBlockType(
    'basic/editabletext', {
        title: __('Montu Editable'),
        description: __('This blocks renders the editable input field.'),
        icon: 'universal-access-alt',
        category: 'layout',
        keyWords: [ __('montueditable') ],
        attributes: {
            content: {
                type    : 'array',
                source  : 'children',
                selector: 'p',
            },
        },
        save( { attributes } ) {
            return <div className="statctext"> <p> { attributes.content } </p> </div>;
        },
        edit( { attributes, setAttributes, setFocus, focus, className } ) {
            function onChange( newContent ){
                setAttributes( { content: newContent } );
            }
            return <Editable
                tagName="p"
                className={className}
                value={attributes.content}
                onFocus={ setFocus }
                focus={ focus }
                onChange={ onChange }
            />
        }
    }
);