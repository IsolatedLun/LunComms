import React, { useId } from 'react';
import { EMPTY_IMG } from '../../../consts';
import { createCubeCSSClass, prepareProps, previewImg } from '../../../utils/funcs';
import { Props_ImageInput } from './types';

const ImageInput = (props: Props_ImageInput) => {
    const _props = prepareProps(props, {
        compostClass: 'input',
        utilClass:
            'border-radius-cubed margin-block-1 display-block cursor-pointer',
    });
    const id = useId();

    function handleImageInput(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        const imgFile = target.files && target.files[0];
        
        if(imgFile) {
            previewImg(id + '-image', imgFile);
        }
    }

    return (
        <div className="[ input-container ]">
            <div className="[ flex align-items-end gap-1 ]">
                <img
                    className="[ container__image ] [ border-radius-cubed ]"
                    id={id + '-image'}
                    alt=''
                    src={EMPTY_IMG}
                />
                <label
                    className={createCubeCSSClass(_props)}
                    data-variant={'image'}
                    data-secondary-variant={_props.secondaryVariant}
                    htmlFor={id}
                >
                    Upload image
                </label>
            </div>
            <input
                id={id}
                type="file"
                hidden
                className="[ width-100vw ]"
                onInput={(e) => {
                    _props.onInput && _props.onInput(e);

                    handleImageInput(e);
                }}
                accept="image/*"
            />
        </div>
    );
};

export default ImageInput;
