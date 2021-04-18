using System;

namespace RSV_dashboard.Bot.Models.Actions
{
    public class Action
    {
        public Guid ID { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public Guid NextNodeID { get; set; }

        public virtual void Execute(ChatContext context)
        {

        }

        public void LinkTo(Actions.Action nextAction)
        {
            this.NextNodeID = nextAction.ID;
        }
        public virtual string GetDefaultValue()
        {
            return string.Empty;
        }
        public void SetActionName(string name)
        {
            this.Name = name;
        }
    }
}
