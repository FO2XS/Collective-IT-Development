using System;

namespace RSV_dashboard.Bot.Models
{
    public class Synonym
    {
        public Guid ID { get; set; } = Guid.NewGuid();
        public string FAQWord { get; set; }
        public string SynonymWord { get; set; }
    }
}
