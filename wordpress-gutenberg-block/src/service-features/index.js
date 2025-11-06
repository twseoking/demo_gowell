import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    RichText
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    TextControl,
    TextareaControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';

registerBlockType('crazypaws/service-features', {
    edit: ({ attributes, setAttributes }) => {
        const { title, features } = attributes;

        const updateFeature = (index, field, value) => {
            const newFeatures = [...features];
            newFeatures[index][field] = value;
            setAttributes({ features: newFeatures });
        };

        const addFeature = () => {
            setAttributes({
                features: [
                    ...features,
                    {
                        icon: '⭐',
                        title: 'New Feature',
                        description: 'Feature description'
                    }
                ]
            });
        };

        const removeFeature = (index) => {
            const newFeatures = features.filter((_, i) => i !== index);
            setAttributes({ features: newFeatures });
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Feature Settings', 'crazypaws-blocks')}>
                        {features.map((feature, index) => (
                            <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                                <h4>{__('Feature', 'crazypaws-blocks')} {index + 1}</h4>
                                <TextControl
                                    label={__('Icon (Emoji)', 'crazypaws-blocks')}
                                    value={feature.icon}
                                    onChange={(value) => updateFeature(index, 'icon', value)}
                                />
                                <TextControl
                                    label={__('Title', 'crazypaws-blocks')}
                                    value={feature.title}
                                    onChange={(value) => updateFeature(index, 'title', value)}
                                />
                                <TextareaControl
                                    label={__('Description', 'crazypaws-blocks')}
                                    value={feature.description}
                                    onChange={(value) => updateFeature(index, 'description', value)}
                                />
                                <Button
                                    onClick={() => removeFeature(index)}
                                    variant="secondary"
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Feature', 'crazypaws-blocks')}
                                </Button>
                            </div>
                        ))}
                        <Button onClick={addFeature} variant="primary">
                            {__('Add Feature', 'crazypaws-blocks')}
                        </Button>
                    </PanelBody>
                </InspectorControls>

                <div className="crazypaws-service-features">
                    <RichText
                        tagName="h2"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Enter title...', 'crazypaws-blocks')}
                        className="features-title"
                    />
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { title, features } = attributes;

        return (
            <div className="crazypaws-service-features">
                <RichText.Content
                    tagName="h2"
                    value={title}
                    className="features-title"
                />
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
});
