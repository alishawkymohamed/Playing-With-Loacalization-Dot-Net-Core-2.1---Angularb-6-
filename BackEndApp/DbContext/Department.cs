using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndApp.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
        [NotMapped]
        public string Name
        {
            get
            {
                return CultureInfo.CurrentCulture.TwoLetterISOLanguageName.ToString().StartsWith("ar") ?
                    (string.IsNullOrEmpty(NameAr) ? NameEn : NameAr) :
                    (string.IsNullOrEmpty(NameEn) ? NameAr : NameEn);
            }
            private set { }
        }

        public string DescriptionAr { get; set; }
        public string DescriptionEn { get; set; }
        [NotMapped]
        public string Description {
            get
            {
                return CultureInfo.CurrentCulture.TwoLetterISOLanguageName.ToString().StartsWith("ar") ?
                    (string.IsNullOrEmpty(DescriptionAr) ? DescriptionEn : DescriptionAr) :
                    (string.IsNullOrEmpty(DescriptionEn) ? DescriptionAr : DescriptionEn);
            }
            private set { }
        }
    }
}
