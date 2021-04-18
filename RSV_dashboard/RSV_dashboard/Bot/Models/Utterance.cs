using System;

namespace RSV_dashboard.Bot.Models
{
    public class Utterance
    {
        public Guid ID { get; set; } = Guid.NewGuid();
        public string Statement { get; set; }

    }
}
