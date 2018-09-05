using System.Collections.Generic;
using BackEndApp.Models;
using IDataService;
using Microsoft.AspNetCore.Mvc;

namespace BackEndApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }
        // GET api/Department
        [HttpGet]
        public ActionResult<IEnumerable<Department>> Get()
        {
            return Ok(_departmentService.GetAll());
        }

        // GET api/Department/5
        [HttpGet("{id}")]
        public ActionResult<Department> Get(int id)
        {
            var dept = _departmentService.GetById(id);
            if (dept != null)
                return Ok(dept);
            else
                return NotFound();
        }

        // POST api/Department
        [HttpPost]
        public void Post([FromBody] Department department)
        {
            _departmentService.Create(department);
        }

        // PUT api/Department
        [HttpPut]
        public IActionResult Put([FromBody] Department department)
        {
            var dept = _departmentService.GetById(department.DepartmentId);
            if (dept != null)
            {
                _departmentService.Update(department);
                return Ok();
            }
            else
                return BadRequest();
        }
    }
}
