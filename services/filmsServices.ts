import pool from '../src/databasepg'
import { FilmEntry } from '../src/types'
import { Request, Response } from 'express'


export const getfilms =  (_req:Request,res:Response) =>{
  var Films:Array<FilmEntry> | undefined
  pool.connect((err,client,done)=>{
    if(err){
      console.error(err)
    }else{
      client.query(`Select * from film`,(e,r)=>{
        done();
        if(e){
          console.error('Error running query',e)
        }else{
          Films = r.rows
          if(Films.length>0){
            res.send(Films).status(201)
          }else{
            res.sendStatus(404)
          }
        }
      })
    }
  })
}

export const getfilmbyid = (req:Request, res:Response) =>{
  var Films:Array<FilmEntry> | undefined
  pool.connect((err,client,done)=>{
    if(err){
      console.error(err)
    }else{
      client.query(`Select * from film where film_id = ${req.params.id}`,(e,r)=>{
        done();
        if(e){
          console.error('Error running query',e)
        }else{
          Films = r.rows
          if(Films.length>0){
            res.send(Films).status(201)
          }else{
            res.sendStatus(404)
          }
        }
      })
    }
  })
}

export const newFilm = (req:Request, res:Response) =>{
  if(isRating(req.body.rating)){
    pool.connect((err,client,done)=>{
      if(err){
        console.error(err)
      }else{
        client.query(`Insert Into film values 
        (${req.body.film_id},'${req.body.title}','${req.body.description}',${req.body.release_year},${req.body.language_id},${req.body.rental_duration},${req.body.rental_rate},${req.body.length},${req.body.replacement_cost},'${req.body.rating}','${req.body.last_update}','${req.body.special_features}','${req.body.fulltext}')`,(e,_r)=>{
          done();
          if(e){
            console.error('Error running query',e)
            res.sendStatus(404)
          }else{
            res.sendStatus(201)
          }
        })
      }
    })
  }else{
    res.sendStatus(404)
    throw console.error('Rating error');
  }
  
}

const isRating=(rating:string):boolean =>{
  return ['NC-17', 'R', 'PG-13', 'G', 'PG'].includes(rating)
}

export const deleteFilm = (req:Request, res:Response) =>{
  pool.connect((err,client,done)=>{
    if(err){
      console.error(err)
    }else{
      client.query(`Delete From film where film_id = ${req.params.id}`,(e,r)=>{
        done();
        if(e){
          console.error('Error running query',e)
        }else{
          if(r.rowCount>0){
            res.sendStatus(201)
          }else{
            res.send("Film does not exist").status(404)
          }
        }
      })
    }
  })
}

export const updateFilm = (req:Request, res:Response) =>{
  pool.connect((err,client,done)=>{
    if(err){
      console.error(err)
    }else{
      client.query(`Update film Set description='${req.body.description}' where film_id = ${req.body.film_id}`,(e,r)=>{
        done();
        if(e){
          console.error('Error running query',e)
        }else{
          res.sendStatus(201)
        }
      })
    }
  })
}