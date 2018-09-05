using BackEndApp.Models;
using System;
using System.Collections.Generic;

namespace IDataService
{
    public interface IDepartmentService
    {
        IEnumerable<Department> GetAll();
        Department GetById(int Id);
        void Update(Department department);
        void Create(Department department);
    }
}
