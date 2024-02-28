'use client'

import { toast } from '@/components/ui/use-toast';
import UploadThingMultipleUploader from '@/components/uploadthing/UploadThingMultiUploader'
import React, { useState } from 'react'
import { UploadFileResponse } from 'uploadthing/client';
import { UploadThingError } from 'uploadthing/server';


type Props = {
    SetImages: (images: string[]) => void
}

const ImageUploaderComponent = (props: Props) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const onUploadComplete = (res: UploadFileResponse<{ uploadedBy: string }>[]) => {
        const images = res.map(res => res.url)
        props.SetImages(images)
        toast({
            variant: "success",
            title: "uploadbegins",
            description: 'upload complete',
        })
        setIsButtonClicked(false)
    };
    const onUploadError = (error: UploadThingError) => {
        toast({
            variant: "success",
            title: "uploadbegins",
            description: error.message,
        })
        setIsButtonClicked(false)
    };
    const onUploadBegin = (fileName: string) => {
        setIsButtonClicked(true)
    };
    return (
        <div className=''>
            <label className='block text-gray-700'>Upload Image</label>
            <UploadThingMultipleUploader
                buttonClickedState={isButtonClicked}
                imageUploaderApi='imageUploader'
                onUploadBegin={onUploadBegin}
                onUploadComplete={onUploadComplete}
                onUploadError={onUploadError}
            />
        </div>
    )

}

export default ImageUploaderComponent