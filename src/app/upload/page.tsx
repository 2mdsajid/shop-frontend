
'use client'

import { toast } from '@/components/ui/use-toast';
import UploadThingMultipleUploader from '@/components/uploadthing/UploadThingMultiUploader'
import React, { useState } from 'react'
import { UploadFileResponse } from 'uploadthing/client';
import { UploadThingError } from 'uploadthing/server';

type Props = {}

const Page: React.FC = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const onUploadComplete = (res: UploadFileResponse<{ uploadedBy: string }>[]) => {
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
        toast({
            variant: "success",
            title: "uploadbegins",
            description: fileName,
        })
    };
    return (
        <div><p>Upload Image</p>
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

export default Page