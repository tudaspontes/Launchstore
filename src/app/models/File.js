const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`
        SELECT * FROM products
        ORDER BY updated_at DESC        
        `)
    },
    create({filename, path, product_id}) {
        const query = `
        INSERT INTO files(
            name,
            path,
            product_id
        ) VALUES ($1, $2, $3)
        RETURNING id
        `
    data.price = data.price.replace(/\D/g, "")
    
    const values = [
        filename,
        path,
        product_id,
    ]

    return db.query(query, values)

    },
}