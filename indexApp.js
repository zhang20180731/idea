const pool=require("./pool");
module.exports={
    /*褿���*/
    ygClass:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexClass",(err,classList)=>{
                res.json(classList);
                conn.release();
            });
        });
    },
    /*��ּ�*/
    yuLeJi:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexYuLeJi",(err,yuLeJiList)=>{
                res.json(yuLeJiList);
                conn.release();
            });
        });
    },
    /*�٤��*/
    ygTutor:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexTutor ",(err,tutorList)=>{
                res.json(tutorList);
                conn.release();
            });
        });
    },
    /*����Ȧ*/
    //���´��
    ygEventNew:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexEvent",(err,eventList)=>{
                res.json(eventList);
                conn.release();
            })
        });
    },
    //���ڴ��
    ygEventOld:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexEvent ",(err,eventList)=>{
                res.json(eventList);
                conn.release();
            })
        });
    }
};
