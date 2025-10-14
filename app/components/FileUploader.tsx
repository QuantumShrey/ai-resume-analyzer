import {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;



    return (
        <div className="w-full">
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className={`space-y-4 cursor-pointer transition-all duration-300 ${
                    isDragActive ? 'scale-105 bg-blue-50' : 'hover:scale-102'
                }`}>
                    {file ? (
                        <div className="uploader-selected-file animate-in fade-in slide-in-from-bottom-4 duration-500" onClick={(e) => e.stopPropagation()}>
                            <img src="/images/pdf.png" alt="pdf" className="size-10 animate-in zoom-in duration-300" />
                            <div className="flex items-center space-x-3">
                                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-150">
                                    <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                                        {file.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className="p-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-red-100 rounded-full" onClick={(e) => {
                                onFileSelect?.(null)
                            }}>
                                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4 transition-transform duration-200 hover:rotate-90" />
                            </button>
                        </div>
                    ): (
                        <div className="folder-upload-container animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="folder-animation">
                                <div className="folder">
                                    <div className="front-side">
                                        <div className="tip"></div>
                                        <div className="cover"></div>
                                    </div>
                                    <div className="back-side cover"></div>
                                </div>
                            </div>
                            <div className="upload-text animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
                                <p className="text-lg text-white font-medium">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span> or drag and drop
                                </p>
                                <p className="text-sm text-white/80 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">PDF (max {formatSize(maxFileSize)})</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader