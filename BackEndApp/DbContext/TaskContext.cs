using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndApp.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options)
            : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>().HasData(new Department { DepartmentId = 1 , DescriptionAr = "وصف القسم الأول", DescriptionEn="First Department Desc",NameAr="القسم الأول", NameEn="First Dept" });
            modelBuilder.Entity<Department>().HasData(new Department { DepartmentId = 2 , DescriptionAr = "وصف القسم الثاني", DescriptionEn="Second Department Desc",NameAr="القسم الثاني", NameEn="Second Dept" });
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Department> Departments { get; set; }
    }
}
