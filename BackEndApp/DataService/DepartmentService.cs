using BackEndApp.Models;
using IDataService;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace DataService
{
    public class DepartmentService: IDepartmentService
    {
        private readonly TaskContext _taskContext;
        public DepartmentService(TaskContext taskContext)
        {
            _taskContext = taskContext;
        }

        public void Create(Department department)
        {
            _taskContext.Departments.Add(department);
            _taskContext.SaveChanges(true);
        }

        public IEnumerable<Department> GetAll()
        {
            return _taskContext.Departments.ToList();
        }

        public Department GetById(int Id)
        {
            return _taskContext.Departments.Find(Id);
        }

        public void Update(Department department)
        {
            var OldDept = GetById(department.DepartmentId);
            EntityEntry DbEntry = null;
            DbEntry = _taskContext.Attach(OldDept);
            DbEntry.CurrentValues.SetValues(department);
            try
            {
                _taskContext.SaveChanges(true);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
