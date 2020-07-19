import React from 'react';
import './AdminHome.css'
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';

const AdminHome = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="adminHome">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="image" placeholder="Image" ref={register({ required: true })} />
                <br/>
                {errors.image && <span className="error">This field is required</span>}
                <br/>
                <input name="title" placeholder="Title" ref={register({ required: true })} />
                <br/>
                {errors.title && <span className="error">This field is required</span>}
                <br/>
                <input name="author" placeholder="Author" ref={register({ required: true })} />
                <br/>
                {errors.author && <span className="error">This field is required</span>}
                <br/>
                <input name="category" placeholder="Category" ref={register({ required: true })} />
                <br/>
                {errors.category && <span className="error">This field is required</span>}
                <br/>
                <input name="publisher" placeholder="Publisher" ref={register({ required: true })} />
                <br/>
                {errors.publisher && <span className="error">This field is required</span>}
                <br/>
                <input name="isbn" placeholder="ISBN" ref={register({ required: true })} />
                <br/>
                {errors.isbn && <span className="error">This field is required</span>}
                <br/>
                <input name="edition" placeholder="Edition" ref={register({ required: true })} />
                <br/>
                {errors.edition && <span className="error">This field is required</span>}
                <br/>
                <input name="numberOfPages" placeholder="Number of pages" ref={register({ required: true })} />
                <br/>
                {errors.numberOfPages && <span className="error">This field is required</span>}
                <br/>
                <input name="country" placeholder="Country" ref={register({ required: true })} />
                <br/>
                {errors.country && <span className="error">This field is required</span>}
                <br/><input name="language" placeholder="Language" ref={register({ required: true })} />
                <br/>
                {errors.language && <span className="error">This field is required</span>}
                <br/>
                <input name="price" placeholder="Price" ref={register({ required: true })} />
                <br/>
                {errors.price && <span className="error">This field is required</span>}
                <br/>
                <input name="stock" placeholder="Stock" ref={register({ required: true })} />
                <br/>
                {errors.stock && <span className="error">This field is required</span>}
                <br/>
                <Button className="submitBtn" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AdminHome;