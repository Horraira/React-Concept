import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Categories from '../categories'

const schema = z.object({
    description: z.string().min(3, { message: 'Description should at least 3 letter' }).max(50),
    amount: z.number({ invalid_type_error: 'Amount is required.' }).min(0.01).max(1000000),
    category: z.enum(Categories, {
        errorMap: () => ({ message: 'Category is required.' })
    })
})

type ExpenseFormData = z.infer<typeof schema>

interface ExpenseFormProps {
    onSubmit: (data: ExpenseFormData) => void
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({
        resolver: zodResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(data => { onSubmit(data); reset() })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <div className="text-danger">{errors.description.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', { valueAsNumber: true })} id='amount' type="number" className="form-control" />
                {errors.amount && <div className="text-danger">{errors.amount.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">category</label>
                <select {...register('category')} id="category" className="form-select">
                    <option value="">---</option>
                    {Categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <div className="text-danger">{errors.category.message}</div>}
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
    )
}

export default ExpenseForm