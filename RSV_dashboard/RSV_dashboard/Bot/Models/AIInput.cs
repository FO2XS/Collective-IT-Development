using Microsoft.ML.Data;

namespace RSV_dashboard.Bot.Models
{
    public class AIInput
    {
        [ColumnName("Statement")]
        public string Utterance { get; set; }
        [ColumnName("Label")]
        public string Label { get; set; }
    }
}
