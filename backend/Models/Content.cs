using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Content
    {
        [Key]
        public long Id {get;set;}
        public string title{get;set;}
        public string desc{get;set;}
        public string author{get;set;}
    }
}