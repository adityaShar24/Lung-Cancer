import React, { useState } from "react";

const Detect = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setError("Please select an image file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://127.0.0.1:8000/classify/classify-image/", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Network response was not ok: ${errorMessage}`);
            }

            const data = await response.json();
            setResults(data);
        } catch (error) {
            setError("Error uploading image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 overflow-hidden">
            <div className="flex flex-col h-full justify-center items-center px-6 sm:px-12 lg:px-40 py-10">
                <div className="w-full  p-8 bg-white rounded-2xl shadow-lg">
                    <div className="w-full max-w-xl m-auto p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-[#111418] text-3xl font-bold leading-tight mb-6 text-center">
                            Upload Cancer Disease Image
                        </h3>

                        <form onSubmit={handleSubmit}>
                            {/* Custom File Upload Input */}
                            <div className="mb-5">
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Choose an image
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="cursor-pointer bg-[#1980e6] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#116bb4] transition-colors">
                                        Browse
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                    {selectedFile && (
                                        <span className="text-gray-600">
                                            {selectedFile.name}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mb-5 flex justify-center items-center">
                                    <img
                                        src={imagePreview}
                                        alt="Selected"
                                        className="h-48 rounded-lg border border-gray-300 shadow-md"
                                    />
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className={`w-full h-12 ${loading ? 'bg-gray-400' : 'bg-[#1980e6]'} text-white font-bold text-lg rounded-xl`}
                                    disabled={loading}
                                >
                                    {loading ? "Uploading..." : "Upload Image"}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Error Display */}
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    {/* Results Display */}
                    {results && (
                        <div className="mt-6">
                            <h4 className="text-[#111418] text-2xl font-bold mb-4">Results</h4>
                            <div className="p-4 border border-[#dce0e5] rounded-xl bg-gray-100">
                                <p className="text-base text-[#111418] mb-2">{results.message}</p>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={`http://127.0.0.1:8000${results.image_data.image}`}
                                            alt="Detected"
                                            className="h-48 w-auto rounded-lg border border-[#dce0e5] shadow-md"
                                        />
                                    </div>

                                    {/* Display graphs */}
                                    <h5 className="text-lg font-semibold text-center">Graphs</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <img
                                            src={`http://127.0.0.1:8000${results.graphs.confusion_matrix}`}
                                            alt="Confusion Matrix"
                                            className="h-80 w-auto rounded-lg border border-[#dce0e5] shadow-md"
                                        />
                                        <img
                                            src={`http://127.0.0.1:8000${results.graphs.roc_curve}`}
                                            alt="ROC Curve"
                                            className="h-80 w-auto rounded-lg border border-[#dce0e5] shadow-md"
                                        />
                                        <img
                                            src={`http://127.0.0.1:8000${results.graphs.precision_recall_curve}`}
                                            alt="Precision Recall Curve"
                                            className="h-80 w-auto rounded-lg border border-[#dce0e5] shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Detect;
