public with sharing class PMDRuletest {
   public void test1(String t1) {
        Database.query('SELECT Id FROM Account' + t1);
    }

    public Contact foo(String status, String ID) {
        Contact c = [SELECT Status__c FROM Contact WHERE Id=:ID];
        Account a=new Account();
        
        Integer t;

        // Make sure we can update the database before even trying
        if (!Schema.sObjectType.Contact.fields.Name.isUpdateable()) {
            return null;
        }

        c.Status__c = status;
        update c;
        return c;
    }
}
