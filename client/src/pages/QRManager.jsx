import React, { useState } from 'react'
import { QRCodeCanvas } from "qrcode.react";

const QRManager = () => {
    const [businessID, setBusinessID] = useState("")
    const [qrCodeValue, setQRCodeValue] = useState("");

    const handleGenerateQRCode = () => {
        if(businessID.trim()) {
            const qrLink = `https://review-automation.onrender.com/review/${businessID}`;
            setQRCodeValue(qrLink)
        } else {
            alert("Please enter a valid business ID")
        }
    };

    const handleDownloadQRCode = () => {
        const canvas = document.getElementById("qrCodeCanvas");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `qr-code-${businessID}.png`;
        // Append to body and trigger download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up by removing the link
        setTimeout(() => {
            if (document.body.contains(downloadLink)) {
            document.body.removeChild(downloadLink);
            }
        }, 100);
    }

  return (
    <div className=' h-[97vh]'>
        <div className=''>
            <p className='text-xl py-3'>QR Manager</p>
        </div>
        <div className='flex gap-20 mt-[20px]'>
            <div className='mx-auto bg-white rounded-lg'>
                <div>
                    <label htmlFor="businessID">Business ID: </label>
                    <input 
                        type='text' 
                        name='businessID' 
                        placeholder='Add business ID' 
                        value={businessID}
                        onChange={(e) => setBusinessID(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleGenerateQRCode}
                    style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    }}
                >
                    Generate QR Code
                </button>
            </div>
            <div className='mx-auto'>
                <div>
                    QR Code
                </div>
                <div>
                    {qrCodeValue ? (
                        <div>
                            <QRCodeCanvas
                                id="qrCodeCanvas"
                                value={qrCodeValue}
                                size={200}
                                level={"H"}
                                includeMargin={true}
                            />
                            <div style={{ marginTop: "10px" }}>
                                <button
                                    onClick={handleDownloadQRCode}
                                    style={{
                                        padding: "10px 15px",
                                        backgroundColor: "#28a745",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Download QR Code
                                </button>
                            </div>
                            <div>
                                Preview: {qrCodeValue}
                            </div>
                        </div>
                    ) : (
                        <p>No QR Code generated yet.</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default QRManager