import React from 'react'
import Categories from '../categories'

interface ExpenseFilterProps {
    onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
    return (
        <select name="" id=""
            onChange={(e) => onSelectCategory(e.target.value)}
            className="form-select">
            <option value="">All Categories</option>
            {Categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    )
}

export default ExpenseFilter