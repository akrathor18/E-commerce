import { useState } from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const image = watch("image");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
      } else {
        setValue("image", file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    }
  };

  const onSubmit = async (data) => {
    console.log("Product data:", data);
    setIsSuccess(true);
    reset();
    setPreviewUrl(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        {isSuccess ? (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 text-center">Product added successfully!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input
                {...register("name", { required: "Product name is required" })}
                className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                rows={3}
                className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.description ? "border-red-500" : "border-gray-700"
                }`}
              ></textarea>
              {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                {...register("price", {
                  required: "Valid price is required",
                  min: { value: 0.01, message: "Price must be greater than 0" },
                })}
                step="0.01"
                className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.price ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image.message}</p>}
            </div>

            {previewUrl && (
              <div className="mt-4">
                <img
                  src={previewUrl}
                  alt="Product preview"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-2 px-4 rounded-md transition duration-300 ${
                isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddProduct