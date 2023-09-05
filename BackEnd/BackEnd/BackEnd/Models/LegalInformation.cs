using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class LegalInformation
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
        public byte[] Document { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        // Foreign Key and navigation property for the relationship with ResearchBook
        [ForeignKey("ResearchBook")]
        public int ResearchBookId { get; set; }
        public ResearchBook ResearchBook { get; set; }
    }
}
