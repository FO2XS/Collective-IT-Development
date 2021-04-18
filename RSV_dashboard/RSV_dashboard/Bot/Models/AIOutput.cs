using Microsoft.ML.Data;

namespace RSV_dashboard.Bot.Models
{
    public class AIOutput
    {
        public bool ExactMatch { get; set; }
       [ColumnName("PredictedLabel")]
        public string Prediction { get; set; }
        public float[] Score { get; set; }
    }
}
