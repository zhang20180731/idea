const pool=require("./pool");
module.exports={
    /*��ҳ�����ͼƬ�б�*/
    add:(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_private",(err,privateList)=>{
            res.json(privateList);
            conn.release();
        });
    });
}
};
