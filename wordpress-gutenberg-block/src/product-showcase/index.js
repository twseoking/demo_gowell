import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    TextControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';

registerBlockType('crazypaws/product-showcase', {
    edit: ({ attributes, setAttributes }) => {
        const { title, description, products } = attributes;

        const updateProduct = (index, field, value) => {
            const newProducts = [...products];
            newProducts[index][field] = value;
            setAttributes({ products: newProducts });
        };

        const addProduct = () => {
            setAttributes({
                products: [
                    ...products,
                    {
                        name: 'New Product',
                        description: 'Product description',
                        image: ''
                    }
                ]
            });
        };

        const removeProduct = (index) => {
            const newProducts = products.filter((_, i) => i !== index);
            setAttributes({ products: newProducts });
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Product Settings', 'crazypaws-blocks')}>
                        {products.map((product, index) => (
                            <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                                <h4>{__('Product', 'crazypaws-blocks')} {index + 1}</h4>
                                <TextControl
                                    label={__('Product Name', 'crazypaws-blocks')}
                                    value={product.name}
                                    onChange={(value) => updateProduct(index, 'name', value)}
                                />
                                <TextControl
                                    label={__('Description', 'crazypaws-blocks')}
                                    value={product.description}
                                    onChange={(value) => updateProduct(index, 'description', value)}
                                />
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => updateProduct(index, 'image', media.url)}
                                        allowedTypes={['image']}
                                        value={product.image}
                                        render={({ open }) => (
                                            <Button onClick={open} variant="secondary">
                                                {product.image ? __('Change Image', 'crazypaws-blocks') : __('Select Image', 'crazypaws-blocks')}
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>
                                <Button
                                    onClick={() => removeProduct(index)}
                                    variant="secondary"
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Product', 'crazypaws-blocks')}
                                </Button>
                            </div>
                        ))}
                        <Button onClick={addProduct} variant="primary">
                            {__('Add Product', 'crazypaws-blocks')}
                        </Button>
                    </PanelBody>
                </InspectorControls>

                <div className="crazypaws-product-showcase">
                    <RichText
                        tagName="h2"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Enter title...', 'crazypaws-blocks')}
                        className="showcase-title"
                    />
                    <RichText
                        tagName="p"
                        value={description}
                        onChange={(value) => setAttributes({ description: value })}
                        placeholder={__('Enter description...', 'crazypaws-blocks')}
                        className="showcase-description"
                    />
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                {product.image && (
                                    <img src={product.image} alt={product.name} />
                                )}
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { title, description, products } = attributes;

        return (
            <div className="crazypaws-product-showcase">
                <RichText.Content
                    tagName="h2"
                    value={title}
                    className="showcase-title"
                />
                <RichText.Content
                    tagName="p"
                    value={description}
                    className="showcase-description"
                />
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            {product.image && (
                                <img src={product.image} alt={product.name} />
                            )}
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
});
