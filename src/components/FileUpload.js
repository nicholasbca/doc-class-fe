import React, { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";

const UploadFiles = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [messageUpload, setMessageUpload] = useState("");
    const [predResult, setPredResult] = useState("");
    const [predConf, setPredConf] = useState("");


    const selectFile = (event) => {
        if (event.target.files.length === 1) {
            setSelectedFiles(event.target.files);
        } else {
            setMessageUpload("Please choose only 1 file")
        }
    };
    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);
        setPredResult("Predicting...")
        setPredConf("Please Wait")

        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((50 * event.loaded) / event.total));
        }, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setPredResult(response.data.document_type)
                setPredConf(response.data.confidence_level)
            })
            .catch(() => {
                setProgress(0);
                setPredResult("Could not upload the file!");
                setPredConf("Could not upload the file!");
                setCurrentFile(undefined);
            });

        setSelectedFiles(undefined);
    };
    useEffect(() => {
        setMessageUpload("No file selected.")
    }, []);

    return (
        <div>
            {currentFile && (
                <div className="progress">
                    <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress + "%" }}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            <label className="btn btn-default">
                {/* <input type="file" onChange={selectFile} /> */}
                <label class="custom-file-upload">
                    <input type="file" onChange={selectFile} />
                    Browse
                </label>
            </label>

            <label style={{
                fontSize: '20px',
                marginRight: '10px'
            }}>
                {/* {selectedFiles.get(0).name} */}
                {
                    selectedFiles ?
                        selectedFiles[0].name :
                        messageUpload
                }
            </label>

            <button
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={upload}
            >
                Upload
            </button>
            <div>
                <div>Prediction: {predResult}</div>
                <div>Confidence Level: {predConf}</div>
            </div>
        </div>
    );
};

export default UploadFiles;