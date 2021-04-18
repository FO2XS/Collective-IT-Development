using System.Collections.Generic;

namespace RSV_dashboard.Bot.Models.Actions
{
    public class StartAction : Action
    {
        public List<Utterance> Utterances { get; set; } = new List<Utterance>();
        public List<Synonym> Synonyms { get; set; } = new List<Synonym>();

    }
}
