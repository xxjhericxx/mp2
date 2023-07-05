const db = require('../models');
const Task = db.tasks;

// create and save a task
exports.create = (req, res) => {
  // validate
  if(!req.body.name || !req.body.description) {
    res.status(400).send({
      message: `Name or Description cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // create object in memory
  const {name, description, priority, completed, avatar} = req.body;
  const task = {
    name, description
  };
  task.priority = priority || task.priority;
  task.completed = (completed == true || completed == false) ? completed : task.completed;
  task.avatar = avatar || task.avatar;

  // save to db
  Task.create(task)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'Task saved successfully.',
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of Task data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      })
    });

};

// retrieve all tasks
exports.findAll = (req, res) => { 
  // find and respond
  Task.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve task records. Error: ${error}`,
        errorCode: `ERR8002`,
      })
    });
};

// retrieve a single task 
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  Task.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find task data with id = ${id}`,
          errorCode: `ERR7001`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve task record. Error: ${error}`,
        errorCode: `ERR8003`,
      })
    });

};

// update a task
exports.update = (req, res) => { 
  // validate
  if(!req.body.name || !req.body.description) {
    res.status(400).send({
      message: `Name and/or Description cannot be empty during an update.`,
      success: false,
      errorCode: `ERR9002`
    });
    return;
  }

  // get id
  const id = req.params.id;

  // construct object
  // create object in memory
  const {name, description, priority, completed, avatar} = req.body;
  const task = {
    name, description
  };
  task.priority = priority || task.priority;
  task.completed = (completed == true || completed == false) ? completed : task.completed;
  task.avatar = avatar || task.avatar;

  // save to db
  Task.update(task, {where: {id: id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Task updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find task data with id = ${id}, update data ignored.`,
          errorCode: `ERR7002`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform update at the moment. Error: ${error}`,
        errorCode: `ERR8004`,
      })
    });
};

// delete all tasks
exports.deleteAll = (req, res) => {
  Task.destroy({where: {}, trucate: true})
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} task${nums > 1 ? 's' : ''} deleted successfully.`,
        data: {
          recordsAffected: nums
        }
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform date all at the moment. Error: ${error}`,
        errorCode: `ERR8005`,
      })
    });
};

// delete a single task
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  Task.destroy({ where: {id : id}})
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Task deleted successfully.',
          data: {
            id: id,
            recordsAffected: num
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete task data with id = ${id}, delete request ignored.`,
          errorCode: `ERR7003`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform deletion at the moment. Error: ${error}`,
        errorCode: `ERR8006`,
      })
    });
};