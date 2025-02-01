import { useState } from "react"
import { Edit, Trash2, ChevronRight } from "react-feather"

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", subcategories: ["Smartphones", "Laptops", "Accessories"] },
    { id: 2, name: "Clothing", subcategories: ["Men", "Women", "Kids"] },
    { id: 3, name: "Home & Garden", subcategories: ["Furniture", "Decor", "Gardening"] },
  ])

  const [newCategory, setNewCategory] = useState("")
  const [newSubcategory, setNewSubcategory] = useState("")
  const [editingCategoryId, setEditingCategoryId] = useState(null)

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory, subcategories: [] }])
      setNewCategory("")
    }
  }

  const handleAddSubcategory = (categoryId) => {
    if (newSubcategory.trim()) {
      setCategories(
        categories.map((category) =>
          category.id === categoryId
            ? { ...category, subcategories: [...category.subcategories, newSubcategory] }
            : category,
        ),
      )
      setNewSubcategory("")
    }
  }

  const handleDeleteCategory = (categoryId) => {
    setCategories(categories.filter((category) => category.id !== categoryId))
  }

  const handleDeleteSubcategory = (categoryId, subcategory) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, subcategories: category.subcategories.filter((sub) => sub !== subcategory) }
          : category,
      ),
    )
  }

  const handleEditCategory = (categoryId, newName) => {
    setCategories(
      categories.map((category) => (category.id === categoryId ? { ...category, name: newName } : category)),
    )
    setEditingCategoryId(null)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Category Management</h3>
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category name"
          className="mr-2 px-3 py-2 bg-secondary text-white rounded-lg"
        />
        <button onClick={handleAddCategory} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Add Category
        </button>
      </div>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id} className="bg-secondary rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              {editingCategoryId === category.id ? (
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => handleEditCategory(category.id, e.target.value)}
                  onBlur={() => setEditingCategoryId(null)}
                  className="bg-gray-600 text-white px-2 py-1 rounded"
                  autoFocus
                />
              ) : (
                <h4 className="text-lg font-medium text-white">{category.name}</h4>
              )}
              <div>
                <button
                  onClick={() => setEditingCategoryId(category.id)}
                  className="text-blue-400 hover:text-blue-300 mr-2"
                >
                  <Edit size={18} />
                </button>
                <button onClick={() => handleDeleteCategory(category.id)} className="text-red-400 hover:text-red-300">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <ul className="ml-4 space-y-2">
              {category.subcategories.map((subcategory, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <ChevronRight size={14} className="mr-2" />
                  {subcategory}
                  <button
                    onClick={() => handleDeleteSubcategory(category.id, subcategory)}
                    className="ml-2 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex">
              <input
                type="text"
                value={newSubcategory}
                onChange={(e) => setNewSubcategory(e.target.value)}
                placeholder="New subcategory name"
                className="mr-2 px-3 py-1 bg-gray-600 text-white rounded"
              />
              <button
                onClick={() => handleAddSubcategory(category.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryManagement

